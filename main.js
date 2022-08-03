let readJeopardyData = async () => {
    let rawJeopardy = await fetch('jeopardy.json');
    let data = await rawJeopardy.json();
    let groupData = _.groupBy(data, 'value');
    let group200 = groupData.$200;
    console.log(group200);

};
readJeopardyData();

