export default function Post({id, title, content, authorName}){
    return (
        <div>
            <h4>{title}</h4>
            <h4>{id}</h4>
            <h4>{content}</h4>
            <h4>{authorName}</h4>
        </div>
    )
}