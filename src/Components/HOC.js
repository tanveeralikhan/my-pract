import { ComponentType } from "react";

/* export interface HOCProps {
  error: string;
} */

export const withError(
  Component
) => {
  return (props) => {
    const { error } = props;
    if (error) return <div>error</div>;

    return <Component {...props} />;
  };
};

const myApp=(props)=>{
  return <div></div>
}


export default withError(myApp)

