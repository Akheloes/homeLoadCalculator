const syslogSeverityColors = {
    error: "\x1b[41m" ,
    warning: "\x1b[43m",
    info: "\x1b[100m",
    debug: "\x1b[44m"
}

/**
 * formats a log follwing a partial syslog with an input message.
 * @param {*} severity error | warning | info | debug 
 * @param {*} message 
 */
export default function logToSyslog(severity, message) {
    severity = severity.toLowerCase()
    const color = syslogSeverityColors[severity] || syslogSeverityColors.info
    const timestamp = new Date().toISOString()
    const syslogMessage = `[${severity.toUpperCase()}] | ${timestamp} | ${message}`
    console.log(syslogSeverityColors[severity] + '%s\x1b[0m\x1b[1m', syslogMessage)
}