import { useEffect } from "react";
import { useMenuContext } from "../contexts/MenuContext";

const ItemStats = () => {
    const { stats } = useMenuContext();

    function capitalizeAndSeparate(text) {
        // Step 1: Separate camelCase or PascalCase into words
        const words = text.replace(/([a-z])([A-Z])/g, '$1 $2').split(' ');
      
        // Step 2: Capitalize the first letter of each word
        const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
      
        // Join back into a single string with spaces
        return capitalizedWords.join(' ');
    }

    return (
        <div className="stats">
            <p>Stored locally</p>
            <ul>
                {stats.map(item => (
                    <li key={item.key}>{capitalizeAndSeparate(item.key)}: {item.total}</li>
                ))}
            </ul>
        </div>
    )
};

export default ItemStats;