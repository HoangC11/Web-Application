import { userProfile } from '../screen/config/settings'
const API = 'https://classroom1234.herokuapp.com/'

const errorMessage = 'Không thể kết nối tới server'

export async function getClasses() {
    console.log('ggggggggg: ', userProfile.token)
    const api = API + 'classes'
    return await fetch(api, {
        method: 'GET',
        headers: new Headers({
            // 'Authorization': userProfile.token
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNjQ3ZDZmOWE4MWQ4MDAxNzJhMzQyOSIsIm5hbWUiOiJob2FuZ2hvYSIsImF2YXRhciI6Ii8vd3d3LmdyYXZhdGFyLmNvbS9hdmF0YXIvOTY1ZWZhOWVlYzQ4NTIzNTYwOTFiZTEwNDhkMzI5Mjg_cz0yMDAmcj1wZyZkPW1tIiwiaXNUZWFjaGVyIjp0cnVlLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNTg0MTEwMjc0LCJleHAiOjE1ODQ5NzQyNzR9.aj_9bwls3AFdhTkrhSQhfch09ZwnC1YbZ8VE1R5QQqk'
        }),
    })
        .then(response => response.json())
        .catch(err => {
            return {
                statusCode: -1,
                message: errorMessage
            }
        })
}