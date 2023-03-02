const Todo = ({ todo, handleSetComplete, handleDelete }) => {

    const { id, title, completed } = todo;

    return (
        <div
            className="flex items-center justify-between p-4 bg-purple-600 border-b border-solid border-purple-400 ">
            <div className="flex items-center">
                {
                    completed ? (
                        <div onClick={() => handleSetComplete(id)} className="bg-grey p-1 rounded-full cursor-pointer">
                            <img
                                className="h-4 w-4 " src="/check-icon.svg" alt="Check Icon"
                            />
                        </div>
                    )
                        : (
                            <span onClick={() => handleSetComplete(id)} className={`border border-white border-solid p-3 rounded-full cursor-pointer`}>
                            </span>
                        )
                }

                <p className={"pl-3 " + (completed && "line-through")}>{title}</p>
            </div>

            <img onClick={() => handleDelete(id)} className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in" src="/close-icon.svg" alt="Close Icon" />
        </div>
    );
}

export { Todo }  
