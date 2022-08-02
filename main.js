let readJeopardyData = async () => {
    let rawJeopardy = await fetch('jeopardy.json');
    let data = await rawJeopardy.json();
    let groupData = _.groupBy(data, 'category');
    console.log(groupData.ALBUMS);

};
readJeopardyData();

