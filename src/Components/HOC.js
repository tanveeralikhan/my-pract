import { ComponentType } from "react";

/* export interface HOCProps {
  error: string;
} */

export const Container = () => {
  return <Pure error={true} />;
};

export const withError = (Component) => {
  return (props) => {
    const { error } = props;
    if (error) return <div>ERROR PAGE</div>;

    return <Component {...props} />;
  };
};

const myApp = () => {
  return <div>MY APP</div>;
};

const Pure = myApp();

export default withError(myApp);
