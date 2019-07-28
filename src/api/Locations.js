const CLIENT_ID="SNJJQYBBHFRQFAAXFDSGKKXGOBHNVVU5LYXUJEKZSY11VJPU";
const CLIENT_SECRET="JGXKWBPPDASZ4SISY4GVZEXP1H3ZK5UQSP13CQS1BPVNGKDC";

///catching the locations with foursquare
export const getLocations = () => {
    return fetch(`https://api.foursquare.com/v2/venues/explore?near=Campinas&cat=food&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20190707`)
    .then(resp => resp.json())
    .then(result => result.response.groups[0].items)
    .catch(error => {
        console.log('There has been a problem with your fetch operation: ' + error.message);
        alert("There has been a problem with API, please Reload the Page");
        
    });
};

