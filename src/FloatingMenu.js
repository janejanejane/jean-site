// // import openFolder from './images/svg/open-file-folder.svg';
// // import closeFolder from './images/svg/file-folder.svg';

// // const btn = document.getElementById("btn-whatodo");
// // const img = btn.querySelector("img");
// // const menu = document.getElementById('menu');

// // btn.addEventListener('click', () => {
// //     if (img.alt.includes("closed")) {
// //         img.src = openFolder;
// //         img.alt = "opened folder";
// //     } else {
// //         img.src = closeFolder;
// //         img.alt = "closed folder";
// //     }

// //     if (menu.classList.contains('hidden')) {
// //         menu.classList.remove('hidden'); 
// //         menu.classList.add('visible');
// //     } else {
// //         menu.classList.remove('visible');
// //         menu.classList.add('hidden');
// //     }
// // });


// // const animate = function() {
// //     img.style.transition = 'transform 0.3s ease-in-out';
// // }


// // requestAnimationFrame(animate);

// // const zenQuotesApi ="/quotes";

// // async function getZenQuotes(url) {
// //   const response = await fetch(url);


// //   var data = await response.json();
// //   console.log(data);
// // }

// // getZenQuotes(zenQuotesApi);


export function FloatingMenu() {
    return (
        <div id="menu" className="hidden">
            <ul>
                <li><a href="#">Want a Zen Quote?</a></li>
            </ul>
        </div>
    );
}