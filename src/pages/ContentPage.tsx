import {myCss} from "../styles/styleUtils";

const ContentPage = () => {
    const styles = myCss

    return(
        <main>
            <div style={styles.container}>
                Your App content here
            </div>
        </main>
    )
}

export default ContentPage;