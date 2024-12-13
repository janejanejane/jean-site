import { useFetch } from "../hooks/useFetch";


export default function FloatingMenu() {
    const {data, loading, error} = useFetch('/quotes');

    console.log('inside FloatingMenu', data, loading, error);

    return (
        <div id="menu">
            <ul>
                <li><a href="#">Want a Zen Quote?</a></li>
            </ul>
        </div>
    );
}