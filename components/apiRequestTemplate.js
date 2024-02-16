import useSWR from 'swr';

export default function referralData() {
    const fetcher = (url) => fetch(url).then(res => res.json());

    const { data, error } = useSWR("/api/waitlistData", fetcher);

    if (error) {
        return (
            <div >

            </div>
        )
    }
    if (!error && !data) {
        return (
            <div >

            </div>
        )
    }

    return (
        <div >

        </div>
    )
}