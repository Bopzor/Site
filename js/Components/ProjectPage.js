const ProjectPage = (props) => {
  if (props.project === null) {
    return null;
  }

  return (
    <div className="articlePage">

      <Project
        project={props.project}
        showAll={true}
      />

    </div>
  )
};
