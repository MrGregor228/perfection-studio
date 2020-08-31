export const chooseLang = () => {

    const htmlTag = document.getElementsByTagName('html')[0];

    const getData = async function (url) {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response.status}!`);
        }
        return await response.json();
    };

    if (htmlTag.getAttribute('lang') == "ru") {
        getData('../db/texts-db.json').then(function (data) {
            let textRU__Single__Tags = {},
                textRU__Multiple__Tags = {};

            textRU__Single__Tags = data[0].ruSingleTags;
            textRU__Multiple__Tags = data[0].ruMultipleTags;

            for (let key in textRU__Single__Tags) {
                document.querySelector(`.${key}`).textContent = textRU__Single__Tags[key];
            }

            for (let key in textRU__Multiple__Tags) {
                document.querySelectorAll(`.${key}`).forEach((item, i) => {
                    item.textContent = textRU__Multiple__Tags[key][i];
                });

            }

        });

    } else if (htmlTag.getAttribute('lang') == "en") {
        getData('../db/texts-db.json').then(function (data) {
            let textEN__Single__Tags = {},
                textEN__Multiple__Tags = {};

            textEN__Single__Tags = data[0].enSingleTags;
            textEN__Multiple__Tags = data[0].enMultipleTags;

            for (let key in textEN__Single__Tags) {
                document.querySelector(`.${key}`).textContent = textEN__Single__Tags[key];
            }

            for (let key in textEN__Multiple__Tags) {
                document.querySelectorAll(`.${key}`).forEach((item, i) => {
                    item.textContent = textEN__Multiple__Tags[key][i];
                });

            }

        });
    }  
};