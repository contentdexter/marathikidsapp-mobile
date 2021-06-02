import * as Color from './color';

export const greenText = {
    ...Color.green
}

export const redText = {
    ...Color.red
}

export const blueText = {
    ...Color.blue
}
export const mediumText = {
    fontSize: 35
}

export const smallText = {
    fontSize: 25
}

export const largeText = {
    fontSize: 50
}

export const mediumGreenText = {
    ...mediumText,
    ...greenText
}

export const smallRedText = {
    ...mediumText,
    ...redText
}

export const largeBlueText = {
    ...largeText,
    ...blueText
}