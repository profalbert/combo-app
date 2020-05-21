import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {orange, red, green} from '@material-ui/core/colors';
import {requestCoins} from '../redux/main-reducer';
import Preloader from './Preloader';
import { AppStateType } from '../redux/redux-store';
import { CoinType } from '../types/types';


const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: orange[500],
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  }),
)(TableRow);


type MapStatePropsType = {
  coinsProps: Array<CoinType>
}
type MapDispatchPropsType = {
  requestCoins: () => void
}
type OwnPropsType = {}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType


const TestBinanceContainer: React.FC<PropsType> = ({coinsProps, requestCoins}) => {
  const [coins, setCoins] = useState<Array<CoinType>>(coinsProps)
  const [redraw, setRedraw] = useState<boolean>(false)

  useEffect(() => {
    // if(coins.length < 1){ // не будет постоянной перерисовки
      if(!redraw) { // делаем постоянную перерисовку (каждые 3 секунды, см. ниже setTimeout)
        requestCoins()
        setCoins(coinsProps) 
        console.log('Redraw coins')
        setRedraw(true)
        setTimeout(() => {
          setRedraw(false)
        }, 3000)   
      }   
    // }
  }, [coins, redraw, coinsProps, requestCoins])


  if (coins.length < 1) {
    return (
      <div className="secondPreloader">
        <Preloader/>
      </div>
    )
  }

  return (
    <div className={"CryptoContainer"}>
      <h1 className="CryptoTitle">Crypto currencies and their courses</h1>
      <TableContainer component={Paper}>
        <Table className={'coinsTable'} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Pair</StyledTableCell>
              <StyledTableCell>Coin</StyledTableCell>
              <StyledTableCell>Last price</StyledTableCell>
              <StyledTableCell align="right">24h change</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {coins.map(item => (
              <StyledTableRow key={item.s}>
                <StyledTableCell component="th" scope="row">
                  <span>{`${item.b}`}</span><span className={"CryptoContainerPairSecondary"}> {`/ ${item.q}`}</span>
                </StyledTableCell>
                <StyledTableCell>{item.an}</StyledTableCell>
                <StyledTableCell>{item.c}</StyledTableCell>

                <StyledTableCell style={{ color: (item.c < item.o) 
                                  ? red['A400'] 
                                  : (item.c > item.o ? green['A700'] : '#000000de')}
                                 } 
                                 align="right">{`
                                  ${(item.c < item.o) 
                                    ? '-' 
                                    : (item.c > item.o ? '+' : '')
                                  }${Math.abs((((item.c / item.o) - 1) * 100)).toFixed(2)}%`
                                 }
                </StyledTableCell>

              </StyledTableRow>
            ))}

          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}



let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    coinsProps: state.mainApp.coins
  }
}
let mapDispatchToProps: MapDispatchPropsType = {
  requestCoins
}


const TestBinance = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, mapDispatchToProps)(TestBinanceContainer)

export default TestBinance;