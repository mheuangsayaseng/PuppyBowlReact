const Roster = (props) => {
  
  const cohortName = "2301-FTB-ET-WEB-AM";
  const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

    return (
      <div className="roster">
        <h1>Check out all the Puppies!</h1>
      </div>
    );
  };
  
  export default Roster;
  