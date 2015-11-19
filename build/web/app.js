angular.module('examApp', [])
        .filter('average', function () {

            return function (input) {
                if (isNaN(input[0].grade) === true) {
                    input[0].grade = 0;
                }
                if (isNaN(input[1].grade) === true) {
                    input[1].grade = 0;
                }
                if (isNaN(input[2].grade) === true) {
                    input[2].grade = 0;
                }
                var total = parseInt(input[0].grade) + parseInt(input[1].grade) + parseInt(input[2].grade);
                console.log(total)
                console.log((total) / 3);
                return (total) / 3;
            };
        })

        .directive("studentGrades", function () {
            return {
                templateUrl: "template/temp1.html"
            };
        })

        .factory('studentFactory', function () {
            studentsInfo = {};
            studentsInfo.allCourses = [
                {courseId: 1000, courseName: "Basic Programming"},
                {courseId: 1001, courseName: "Advanced Programming"},
                {courseId: 1003, courseName: "DataBase Intro"}];
            studentsInfo.students = [];
            studentsInfo.students.push({studentId: 100, name: "Peter Hansen", grades: [{grade: "10"}, {grade: "12"}, {}]});
            studentsInfo.students.push({studentId: 101, name: "Jan Olsen", grades: [{grade: "7"}, {grade: "10"}, {}]});
            studentsInfo.students.push({studentId: 102, name: "Gitte Poulsen", grades: [{grade: "7"}, {grade: "7"}, {}]});
            studentsInfo.students.push({studentId: 103, name: "John McDonald", grades: [{grade: "10"}, {}, {grade: "7"}]});
            
            return studentsInfo;
            
        })

        .controller('ExamController', ['studentFactory', function (studentFactory) {
            var self = this;
            self.ss = studentFactory;
        }]);

