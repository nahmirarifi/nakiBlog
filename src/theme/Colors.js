import { AppContext } from "../hooks/Context"

const Colors = () => {
    const { dark } = AppContext()

    return {
        bg: dark ? "#13141c" : "#fdfdfd",
        statusBar: dark ? "#13141c" : "#fdfdfd",
        text: dark ? "#528a9d" : "#067d96",
        text1: dark ? "#e6e4e4" : "#5e5e60",
        red: dark ? "#f90505" : "#aa0404",
        activeTab: dark ? "#0caed0" : "#067d96",
        tab: dark ? "#e7e7e7" : "#000000",
    }
}

export default Colors