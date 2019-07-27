CLIENT_ID="SNJJQYBBHFRQFAAXFDSGKKXGOBHNVVU5LYXUJEKZSY11VJPU";
CLIENT_SECRET="JGXKWBPPDASZ4SISY4GVZEXP1H3ZK5UQSP13CQS1BPVNGKDC";


export default (getLocation = () => {
    fetch(`https://api.foursquare.com/v2/venues/explore?near=Campinas&cat=food&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20190726`)
    .then(resp => resp.json())
    .then(result => console.log(result.response.groups[0].items));
});