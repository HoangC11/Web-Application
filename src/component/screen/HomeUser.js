import React, { Component } from 'react';
import { getClasses } from '../api/apiUser'
import ItemBlog from './blog/ItemBlog'
import '../css/HomeUserCSS.css'
class HomeUser extends Component {
    state = {
        data: [],
        renderData: []
    }
    renderTableArr(arr) {
        const tableRows = []
        if (arr.length > 0 && arr.length >= 3) {
            for (let i = 0; i < arr.length; i += 3) {
                tableRows.push(
                    <tr>
                        <td></td>
                    </tr>
                )
            }
        }
    }

    async componentDidMount() {
        const response = await getClasses()
        if (response !== undefined) {
            if (response.statusCode === 1) {
                this.setState({
                    data: response.data,
                    renderData: response.data.map((item, index) => {
                        if (index % 3 === 0) {
                            return (
                                <tbody>
                                    <tr className='TableTrItem'>
                                        {response.data.map((value, i) => {
                                            if (i === index || i === index + 1 || i === index + 2) {
                                                return (<td className='TableTdItem'><ItemBlog item={value} /></td>)
                                            } else {
                                                return null
                                            }
                                        })}
                                    </tr>
                                </tbody>
                            )
                        } else {
                            return null
                        }
                    })
                })
            }
        } else {

        }
    }
    render() {
        return (
            <div style={{ width: '100%', }}>
                <div className='header'>
                    <img src='https://image.flaticon.com/icons/svg/813/813670.svg' className='iconHome' />
                    <a className='titleScreen'>TRANG CHỦ</a>
                    <img src='https://image.flaticon.com/icons/svg/527/527471.svg' className='iconLogout' />
                </div>
                <div className='headerLineBotton'></div>
                <div style={{}} className='ListItem'>

                    <table className='TableItem'>
                        {this.state.renderData}
                    </table>

                </div>

            </div>


        );
    }
}

const styles = {
    header: {
        width: '100%',
        height: 50,
        backgroundColor: 'red',

    }
}
export default HomeUser;