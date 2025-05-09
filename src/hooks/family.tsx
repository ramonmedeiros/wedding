const BACKEND_URL = "https://api.kubraandramon.com/"

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

export const updateFamily = (code: string, confirmed_guests: string[], confirmation: boolean, comments: string) => {
    const url = new URL(BACKEND_URL + "family/" + code);

    return fetch(url.toString(), {
        method: "POST",
        body: JSON.stringify(
            {
                confirmed_guests: confirmed_guests,
                confirmed: confirmation,
                comments: comments,
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

interface Family {
    name: string
    expected_guests: string[]
    confirmed_guests?: string[]
    comments: string
    confirmed: boolean
    confirmed_at?: Date
}
export default Family
