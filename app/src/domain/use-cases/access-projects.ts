import { setProjects } from '../redux/actions/project';
import type { ThunkResult } from '../redux/types';

const accessProjects =
  (): ThunkResult<Promise<void>> =>
  async (dispatch, getState, { projectGateway }): Promise<void> => {
    const projects = await projectGateway.accessProjects();

    dispatch(setProjects(projects));
  };

export default accessProjects;
