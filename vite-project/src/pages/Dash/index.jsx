function DoctorTable({data,addData}) {

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Doctorname</th>
                        <th>Specialization</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.Doctorname}</td>
                            <td>{item.Specialization}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={addData}>Add Data</button>
        </div>
    );
}
export default DoctorTable;












