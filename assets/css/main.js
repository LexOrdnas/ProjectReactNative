import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    containerButton: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    textPage: {
      padding: 20
    },

    text: {
      color: 'red'
    },

    buttonHome: {
      marginRight: 50
    },

    darkbg: {
      backgroundColor: '#fff'
    },

    loginForm: {
      width: '80%'
    },

    loginInput: {
      backgroundColor: "#ccc",
      color: '#fff',
      fontSize: 19,
      padding: 7,
      marginBottom: 15,
      borderRadius: 5
    },

    loginButton: {
      padding: 12,
      backgroundColor: 'red',
      alignSelf: 'center',
      borderRadius: 10
    },

    buttonText: {
      fontWeight: 'bold',
      fontSize: 20,
      color: '#fff'
    },

    loginLogo:{
      marginBottom: 15
    },

    space: {
      marginBottom: 50
    },

    contentAll:{
      backgroundColor:"white",
      alignItems:"center"
  },

    content: {
        justifyContent:"center",
        alignItems:'center',
        textAlign:"center",
        backgroundColor:"white",
        marginBottom: 150
    },

    text: {
        marginTop:"10%",
        textAlign: "center",
        fontSize:20,
        fontWeight:"bold",
        marginBottom: '10%'
    },
    img: {
        resizeMode:"stretch",
    },
    
    btn: {
      padding: 12,
      marginTop: 20,
      backgroundColor: 'red',
      alignSelf: 'center',
      borderRadius: 10
        
    },

    textBtn: {
        color:"white",
        textAlign:"center",
        justifyContent:"center",
        alignItems:"center",
        fontWeight:"bold"
    },

    produto: {
        textAlign:"center",
        justifyContent:"center",
        alignItems:"center",
        marginBottom:70,
    },
    textoProduto: {
        marginTop:"10%",
        textAlign: "center",
        fontSize:20,
        fontWeight:"bold",
        marginBottom: '10%',
    }
  });

  export { styles };