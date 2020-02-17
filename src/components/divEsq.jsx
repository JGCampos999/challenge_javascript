import React from 'react'
import Typography from '@material-ui/core/Typography';
import blueGrey from '@material-ui/core/colors/blueGrey';
import Link from '@material-ui/core/Link';
import me from '../imgs/me.jpg';


const LadoEsq = (props) => {
    const style = {
        div: {
            height: "855px",
            width: "25%",
            backgroundColor: blueGrey[200],
            float: "left"
        },
        img: {
            display: "block",
            borderRadius: "50%",
            width: "90%",
            marginLeft: "auto",
            marginRight: "auto",
        },
        typo: {
            color: blueGrey[900],
            textAlign: "center",
        }
    }
    return (
        <div style={style.div}>
            <img src={me} style={style.img} alt="me" />
            <Typography style={style.typo}>
                <span align="left"><strong>Guilherme Campos Ferreira da Cruz</strong></span>
            </Typography>
            <Typography style={style.typo}>
                <span align="left"><strong>Email: <Link href="mailto:guicamposf16@gmail.com" style={style.typo}>guicamposf16@gmail.com</Link></strong></span>
            </Typography>
            <Typography style={style.typo}>
                <span align="left"><strong>
                    <Link href='https://github.com/JGCampos999?tab=repositories' target="_blank" style={style.typo}>Meu GitHub</Link>
                </strong></span>
            </Typography>
        </div>
    )
}

export default LadoEsq