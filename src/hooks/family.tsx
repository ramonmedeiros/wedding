export const BACKEND_URL = "https://api.kubraandramon.com/"

export const getFamily = (code: string): Promise<Family> => {
    return fetch(BACKEND_URL + "family/" + code).
        then(response => response.json()).
        then(data => data as Family).
        catch(e => {
            console.error(e)
            return Promise.reject(new Error(
                e?.
                    map((e: Error) => e.message).
                    join('\n') ?? 'unknown',
            ))
        })
}

export const updateFamily = (code: string, confirmed_guests: string[], confirmation: boolean, comments: string, songs: string[], alergies: Alergy[]) => {
    const url = new URL(BACKEND_URL + "family/" + code);

    return fetch(url.toString(), {
        method: "POST",
        body: JSON.stringify(
            {
                confirmed_guests: confirmed_guests,
                confirmed: confirmation,
                comments: comments,
                songs: songs,
                alergies: alergies
            }
        ),
    }).
        catch(e => {
            console.error(e)
            return Promise.reject(new Error(
                e?.
                    map((e: Error) => e.message).
                    join('\n') ?? 'unknown',
            ))
        })
}

export interface Alergy {
    id: string
    name: string
    count: number
}

export interface Family {
    name: string
    expected_guests: string[]
    confirmed_guests?: string[]
    comments: string
    confirmed: boolean
    songs: string[]
    alergies: Alergy[]
    confirmed_at?: Date
}