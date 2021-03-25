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

