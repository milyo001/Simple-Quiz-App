
namespace QuizApi.Models
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    public class Question
    {
        [Key]
        public int Id { get; set; }

        [Column(TypeName ="nvarchar(250)")]
        public string InWords { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        #nullable enable
        public string? ImageName { get; set; }
        #nullable disable

        [Column(TypeName = "nvarchar(50)")]
        public string Option1 { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string Option2 { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string Option3 { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string Option4 { get; set; }

    }
}
