
import React from 'react';


class UserClass extends React.Component {

    constructor(props) {
        super(props);

        console.log(props.name);
    }
    render() {
        return (
            <>
                <div className="border-sky-200 border w-[400px] h-[200px] mx-auto mt-4 text-center font-semibold">

                    <h2>
                        Name: {this.props.name}
                    </h2>
                    <h3>
                        Email: Darshan@gmail.com
                    </h3>

                </div>
            </>
        )
    }
}

export default UserClass;