fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => displayCountries(data));
    const displayCountries = countries =>{

        const countryDiv = document.getElementById('countries');

                        //for each 
        countries.forEach(country => {
            const countryName = country.name;
            const countryCapital = country.capital;
            
            const countrySubDiv  = document.createElement('div');
            
            countrySubDiv.className='country';
            const countryInfo = `
            <h3 class='country-name'>${countryName}</h3>
            <p>${countryCapital}<p>
            <button onclick="displayCountryDetail('${countryName}')">Show Button</button>
            `;
            countrySubDiv.innerHTML= countryInfo;

            countryDiv.appendChild(countrySubDiv);
            
        });

            
        // for (let i = 0; i < countries.length; i++) {
        //     const country = countries[i];
        //     const countryName = country.name;
        //     const countryCapital = country.capital;
            
        //     const countrySubDiv  = document.createElement('div');

        //     // const name = document.createElement('h3');
        //     // name.innerText = countryName;
        //     // const capital = document.createElement('p');
        //     // capital.innerText = countryCapital;
            
        //     // countrySubDiv.appendChild(name);
        //     // countrySubDiv.appendChild(capital);
        //     countrySubDiv.className='country';
        //     const countryInfo = `
        //     <h3 class='country-name'>${countryName}</h3>
        //     <p>${countryCapital}<p>
        //     `;
        //     countrySubDiv.innerHTML= countryInfo;

        //     countryDiv.appendChild(countrySubDiv);
            
        // }
    }

    const displayCountryDetail = name => {
         const url = `https://restcountries.eu/rest/v2/name/${name}`
         fetch(url)
         .then(res=>res.json()) 
         .then(data => renderCountryInfo(data[0]));
        
    }
    const renderCountryInfo = country => {
        
        const countryFinalDiv = document.getElementById('countryDetail');
        countryFinalDiv.innerHTML =`
             <h1>${country.name}</h1>
             <p>Population : ${country.population}</p>
             <p>Area : ${country.area}</p>
             <img src="${country.flag}">
        `
    }