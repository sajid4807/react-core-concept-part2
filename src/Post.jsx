export default function Post ({post}){
    console.log(post)
    const {title} = post

    return (
        <div className="card">
            <p>{title}</p>
        </div>
    )

}
