import { PureComponent, ReactNode } from "react";
    
class PureComponents extends  PureComponent {

    render(): ReactNode {
        return(
            <div className=" border border-gray-900 p-4 text-green-800">This is a compound</div>
        )
    }
}



export default PureComponents