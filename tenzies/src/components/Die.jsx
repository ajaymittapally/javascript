export default function Die(props){
    const styles={
        backgroundColor: props.isHeld?"green":"white"
    };
    return (
        <button style={styles}>{props.value}</button>
    )
}