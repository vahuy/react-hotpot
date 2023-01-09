import moment from 'moment'
export function getDateTime(date) {
    if (!date) return ''
    try {
        const localTime = moment.utc(date).toDate()
        const dt = localTime ? moment(localTime).format('YYYY-MM-DD') : ''
        const tm = localTime ? moment(localTime).format('HH:mm:ss') : ''
        const utfOffset = moment().utcOffset()
        return `${dt}T${tm}.${utfOffset}Z`
    } catch (e) {
        console.error('getDateTime error: ' + e.message)
    }
}
export function getDate(date) {
    if (!date) return ''
    try {
        const localTime  = moment.utc(date).toDate()
        return localTime ? moment(localTime).format('YYYY-MM-DD') : ''
    } catch (e) {
        return ''
    }
}