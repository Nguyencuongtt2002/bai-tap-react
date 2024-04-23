using Model;

namespace BLL
{
    public interface ILienHeBus
    {
        List<LienHeModel> GetALL();
        bool CreateLienHe(LienHeModel themlienhe);
        bool UpdateLienHe(LienHeModel sualienhe);
        bool DeleteLienHe(int ma);
    }
}