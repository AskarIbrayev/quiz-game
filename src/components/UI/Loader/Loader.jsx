import cl from './Loader.module.css'
export default function Loader() {
    return (
        <div>
            <h4>Loading...</h4>
            <div className={cl.loader}></div>
        </div>
    )
}