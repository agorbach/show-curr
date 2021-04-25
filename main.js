function searchAllCountries() {
    const ajax = new XMLHttpRequest();
    ajax.onreadystatechange = () => {
        if (ajax.readyState === 4) {
            if (ajax.status === 200) {
                const countries = JSON.parse(ajax.responseText);
                displayCountries(countries);
            }
            else {
                alert("Some error... Status: " + ajax.status);
            }
        }
    };
    ajax.open("GET", "https://restcountries.eu/rest/v2/all");
    ajax.send();
}

function displayCountries(countries) {
    const tableUsers = document.getElementById("tableCountries");
    let contentHTML = `
        <tr>
            <th>Name</th>
            <th>Top level domain</th>
            <th>Capital</th>
            <th>Currencies</th>
			<th>Flag</th>
			<th>Borders</th>
        </tr>
    `;
    for (const singleCountry of countries) {
		var i, single_borders = "";
		for (i in singleCountry.borders) {
              single_borders += "&quot;" + singleCountry.borders[i] + "&quot; ";
             }
        contentHTML += `
            <tr>
                <td>${singleCountry.name}</td>
                <td>${singleCountry.topLevelDomain}</td>
                <td>${singleCountry.capital}</td>
                <td>${singleCountry.currencies[0].code}, ${singleCountry.currencies[0].name}, ${singleCountry.currencies[0].symbol}</td>
				<td><img width=50 src=${singleCountry.flag}></td>
				<td>${single_borders}</td>							
            </tr>
        `;		
    }
    tableUsers.innerHTML = contentHTML;
}


function searchCountry() {
    const ajax = new XMLHttpRequest();
    ajax.onreadystatechange = () => {
        if (ajax.readyState === 4) {
            if (ajax.status === 200) {
                const country = JSON.parse(ajax.responseText);
                displayCountry(country);
            }
            else {
                alert("Some error... Status: " + ajax.status);
            }
        }
    };
    ajax.open("GET", "https://restcountries.eu/rest/v2/name/"+document.getElementById("country").value);
    ajax.send();
}

function displayCountry(countries) {
    const tableUsers = document.getElementById("tableCountries");
    let contentHTML = `
        <tr>
            <th>Name</th>
            <th>Top level domain</th>
            <th>Capital</th>
            <th>Currencies</th>
			<th>Flag</th>
			<th>Borders</th>
        </tr>
    `;
    for (const singleCountry of countries) {
		var i, single_borders = "";
		for (i in singleCountry.borders) {
              single_borders += "&quot;" + singleCountry.borders[i] + "&quot; ";
             }
        contentHTML += `
            <tr>
                <td>${singleCountry.name}</td>
                <td>${singleCountry.topLevelDomain}</td>
                <td>${singleCountry.capital}</td>
                <td>${singleCountry.currencies[0].code}, ${singleCountry.currencies[0].name}, ${singleCountry.currencies[0].symbol}</td>
				<td><img width=50 src=${singleCountry.flag}></td>
				<td>${single_borders}</td>							
            </tr>
        `;		
    }
    tableUsers.innerHTML = contentHTML;
}


