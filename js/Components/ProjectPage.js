const ProjectPage = (props) => {
  if (props.project === null) {
    return null;
  }

  return (
    <div className="projectPage">

      <Project
        project={props.project}
        onRemoveProject={() => props.onRemoveProject(props.project.id)}
        showAll={true}
      />

    </div>
  )
};
