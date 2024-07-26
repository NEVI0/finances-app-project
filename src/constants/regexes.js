const NAME = /[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/g
const EMAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

export const REGEXES = { NAME, EMAIL }