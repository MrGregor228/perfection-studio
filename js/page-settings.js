export const pageSettingsFunction = () => {
    let pageControlsBtn = document.querySelector('.page-controls button'),
        pageControlSettings = document.querySelector('.page-control__settings'),
        pageControls = document.querySelector('.page-controls'),
        themes = document.querySelectorAll('.theme button'),
        coloursArray = ['', '#006df3', '#fff'],
        settingsColorsArray = ['0,0,0, .9', '1, 132, 255, .9', '255,255,255,.9'],
        settingsHeaderColorsArray = ['white', 'white', 'black'],
        gradientColorFirst = ['', '#006df3', 'white'],
        gradientColorSecond = ['', '#0086f3', 'white'],
        textColoursArray = ['', '', '#000'],
        socialColorsArray = ['', '', '#ffc41d'],
        classHero = document.querySelector('header'),

        teammatesSection = document.querySelector('.teammates-section'),
        teammatesCaptions = document.querySelectorAll('.teammae__caption'),
        teammaeDescription = document.querySelectorAll('.teammae__description'),

        projects = document.querySelector('.projects'),
        featuresContainer = document.querySelector('section.features.section'),
        footer = document.querySelector('footer'),
        allTexts = document.querySelectorAll('h1,h2,h3,h4,h5,h6,p,a'),
        socialLinks = document.querySelectorAll('.social-links'),
        settingsHeader = document.querySelector('.themes__header');

    let nowSettings = {
        body: "",
        hero: "",
        projects: "",
        featuresContainer: "",
        footer: "",
        allTexts: "",
        socialLinks: "",
        pageControlSettings: "",
        settingsHeader: ""
    };

    pageControlsBtn.addEventListener('click', () => {
        pageControlSettings.classList.toggle('shown');

        pageControls.style.opacity = '0';
        setTimeout(() => {
            document.querySelector('.cogs').classList.toggle('block');
            document.querySelector('.cross').classList.toggle('block');
            pageControls.style.opacity = '1';
            pageControls.classList.toggle('right-top');
        }, 250);

    });

    themes.forEach((item, i) => {
        item.addEventListener('click', () => {

            document.body.classList.add('opacity-color-change');
            setTimeout(() => {
                document.body.style.backgroundColor = coloursArray[i];
                classHero.style.cssText = `background:linear-gradient(0.01deg, ${gradientColorFirst[i]} 0.01%, ${gradientColorSecond[i]} 95.44%);`;
                projects.style.cssText = `background: linear-gradient(180deg, ${gradientColorFirst[i]} 0%, ${gradientColorSecond[i]} 95.44%);`;
                featuresContainer.style.cssText = `background-color:${coloursArray[i]};`;
                footer.style.cssText = `background:linear-gradient(0.01deg, ${gradientColorFirst[i]} 0.01%, ${gradientColorSecond[i]} 95.44%);`;
                allTexts.forEach(item => {
                    item.style.color = textColoursArray[i];
                    nowSettings.allTexts = textColoursArray[i];
                });
                socialLinks.forEach(item => {
                    item.style.cssText = `background-color:${socialColorsArray[i]};width:max-content;padding:5px 10px; border-radius:10px;`;
                    nowSettings.socialLinks = item.style.cssText;
                });

                pageControlSettings.style.cssText = `background-color:rgba(${settingsColorsArray[i]});`;
                settingsHeader.style.cssText = `color:${settingsHeaderColorsArray[i]};`;

                teammatesSection.style.cssText = `background-color:${coloursArray[i]};`;
                teammatesCaptions.forEach(item=>{
                    item.style.cssText = `color:${textColoursArray[i]};`;
                });
                teammaeDescription.forEach(item=>{
                    item.style.cssText = `color:${textColoursArray[i]};`;
                });
                document.querySelector('.contacts-form').style.cssText = "outline:gray solid 1px ;";

                nowSettings.body = document.body.style.backgroundColor = coloursArray[i];
                nowSettings.hero = classHero.style.cssText;
                nowSettings.projects = projects.style.cssText;
                nowSettings.featuresContainer = featuresContainer.style.cssText;
                nowSettings.footer = footer.style.cssText;
                nowSettings.pageControlSettings = pageControlSettings.style.cssText;
                nowSettings.settingsHeader = settingsHeader.style.cssText;
                nowSettings.form_outline = document.querySelector('.contacts-form').style.cssText = "outline:gray solid 1px ;";


                localStorage.setItem('Site Settings', JSON.stringify(nowSettings));

            }, 200);
            setTimeout(() => {
                document.body.classList.remove('opacity-color-change');
            }, 300);
        });
    });

    window.addEventListener('load', () => {

        if (localStorage.getItem('Site Settings')) {
            let storedData = localStorage.getItem('Site Settings'),
                parsedData = JSON.parse(storedData);
            let Settings = {
                body: parsedData.body,
                hero: parsedData.hero,
                projects: parsedData.projects,
                featuresContainer: parsedData.featuresContainer,
                footer: parsedData.footer,
                allTexts: parsedData.allTexts,
                socialLinks: parsedData.socialLinks,
                pageControlSettings: parsedData.pageControlSettings,
                settingsHeader: parsedData.settingsHeader,
                form_outline:parsedData.form_outline
            };
            document.body.style.backgroundColor = Settings.body;
            classHero.style.cssText = Settings.hero;
            projects.style.cssText = Settings.projects;
            featuresContainer.style.cssText = Settings.featuresContainer;
            footer.style.cssText = Settings.footer;
            allTexts.forEach(item => {
                item.style.color = Settings.allTexts;
            });
            socialLinks.forEach(item => {
                item.style.cssText = Settings.socialLinks;
            });
            document.querySelector('.contacts-form').style.cssText = Settings.form_outline;
            pageControlSettings.style.cssText = Settings.pageControlSettings;
            settingsHeader.style.cssText = Settings.settingsHeader;
        }
    });
};