export const queries = {
    createNewStudent: "INSERT INTO dbo.Student (name, surname, dni, address, address_n , email, phone) VALUES (@name, @surname, @dni, @address, @address_n, @email, @phone)",
    getAllStudents: "SELECT * FROM dbo.Student",
    deleteStudnet: "DELETE FROM dbo.Student WHERE id_student = @id",
    getStudentById: "SELECT * FROM dbo.Student WHERE id_student = @id",
    updateStudent: "UPDATE dbo.Student SET name = @name, surname = @surname, dni = @dni, address = @address, address_n = @address_n, email = @email, phone = @phone WHERE id_student = @id"
}