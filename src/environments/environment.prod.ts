
export let APIURL = '';
​
switch (window.location.hostname) {
    // this is the deployed angular application
    case 'cjb-hoosiervolunteers.herokuapp.com':
        // this is the full url of your deployed API
        APIURL = 'https://hoosiervolunteer.azurewebsites.net/'
        break;
    default:
        // this is the local host name of your API
        APIURL = 'http://localhost:4200';
        
}

export const environment = {
  production: true
};
