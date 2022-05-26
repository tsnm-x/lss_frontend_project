import React from "react";

const ProfileCardWrapHoc = (PushedElement) => {
    return class NewComponent extends React.Component {
        render() {
            return (
                <aside className={`card_wrap ${this.props.className}`}>
                    {/* top slider  */}
                    <div className=" pb-8 ">
                        <h6 className=" gotham-10px-mid text-liquid-white capitalize text-[] ">
                            {this.props.title}
                        </h6>
                    </div>
                    <PushedElement {...this.props} />
                </aside>
            );
        }
    };
};

export default ProfileCardWrapHoc;
