import { useEffect, useState } from "react";
import { useMenuContext } from "../contexts/MenuContext";

const ItemStats = () => {
    const { stats, data } = useMenuContext();
    const [sortedStats, setSortedStats] = useState([]);

    function split(words) {
        return words.replace(/([a-z])([A-Z])/g, '$1 $2').split(' ');
    }

    function capitalize(words) {
        return words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    }

    function join(words) {
        return words.join(' ');
    }

    function format() {
        const formatted = stats.map(item => {
            return { 
                key: join(capitalize(split(item.key))),
                total: item.total
            };
        });

        return formatted;
    }

    useEffect(() => {
        const formattedStats = format().sort((a, b) => {
            const key1 = a.key.toLowerCase();
            const key2 = b.key.toLowerCase();

            if(key1 < key2) {
                return -1;
            } else if(key1 > key2) {
                return 1;
            } else {
                return 0;
            }
        });

        setSortedStats(formattedStats);
    }, [stats, data]);

    return (
        <div className="stats">
            <p>Stored locally</p>
            <ul>
                {sortedStats.map((item, i) => (
                    <li key={i}>{item.key}: {item.total}</li>
                ))}
            </ul>
        </div>
    )
};

export default ItemStats;