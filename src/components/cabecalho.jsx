import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { bindActionCreators } from 'redux';
import { getAllData } from '../redux/actions'
import Typography from '@material-ui/core/Typography';
import logo from '../imgs/logo.png';


const Cabecalho = (props) => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(props.url).then(res => {
            let data = res.data
            setData(data)
        })
    }, [props.url])

    const style = {
        table: {
            align: "left",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "40px",
            marginBottom: "40px",
        },
        img: {
            display: "block",
            width: "200px",
            marginLeft: "auto",
            marginRight: "auto",
        },
        typo: {
            textAlign: "right",
            color: "#263238"
        }

    }
    return (
        <div>
            <img src={logo} alt="logo" style={style.img} />
            <div>
                <Typography style={style.typo}>
                    <span align="center"><strong>Valor Pago: R$ {data.amountPayd},00</strong></span>
                </Typography>
                <Typography style={style.typo}>
                    <span align="center"><strong>Juros Mensais: {data.monthlyInterest}%</strong></span>
                </Typography>
                <Typography style={style.typo}>
                    <span align="center"><strong>Total a Pagar: R$ {data.amountTaken + data.totalAmountInTaxes},00</strong></span>
                </Typography>
                <Typography style={style.typo}>
                    <span align="center"><strong>Total de Juros: R$ {data.totalAmountInTaxes},00</strong></span>
                </Typography>
            </div>
        </div>
    )
}

const mapstateToProps = state => ({
    url: state.prestacao.url
})

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getAllData }, dispatch)
}

export default connect(mapstateToProps, mapDispatchToProps)(Cabecalho)