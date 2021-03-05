import React from 'react'


const Card = ({user}) => {



    return (
        <div className="card">
            <div className="break">
                <div className="section">
                    <div className="user-info">
                        <img classNmae="user-profile" src={''} width={'100'}></img>
                        <div>
                        <div className="section">
                            <h3 className="bold">username</h3>
                            <p className="username">name</p>
                            <p></p>

                        </div>
                        <p>{user.caption}</p>
                        </div>
                    </div>
                    <div className="is-followed">followed</div>

                </div>
                <video className="video" controls>
                    <source src={user.video} type="video/mp4"></source>
                </video>

            </div>

        </div>
    )
}