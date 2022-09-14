import React, {FC, ReactNode} from "react";


const Layout:FC<{ children:ReactNode }> = ({ children }) => {
    return (
        <main className={`bg-gray-300 w-screen h-screen flex`}>
            <section className={`w-96 h-screen p-5`}>
                <div className={`bg-slate-50 w-full h-full rounded-lg`}>

                </div>
            </section>
            <section className={`flex flex-col w-full h-full p-5 gap-y-5`}>
                <div className={`bg-slate-50 h-12 rounded-lg flex w-full`}>
                    <div className={`grow`}>

                    </div>
                    <div className={`w-64 bg-slate-100 h-full rounded-r-lg flex-none flex items-center`}>
                        <div className={`bg-red-200 w-8 h-8 rounded-full`}/>
                        <div className={`self-center text-gray-800 grow text-center`}><span>Лазарев Е.С</span></div>
                        <div className={`flex flex-col justify-center align-center text-center rounded-r-lg overflow-hidden`}>
                            <div className={`text-sm bg-gray-200 hover:bg-gray-300 cursor-pointer`}>Настройки</div>
                            <div className={`text-sm text-red-500 cursor-pointer bg-red-50 hover:bg-red-200`}>Выйти</div>
                        </div>
                    </div>
                </div>
                <div className={`bg-slate-50 h-full rounded-lg`}>
                    { children }
                </div>
            </section>
        </main>
    )
}

export { Layout }
