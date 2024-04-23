using Model;

namespace BLL
{
    public interface IMenuBus
    {
        List<MenuModel> GetALLMenu();
        bool Create(MenuModel them);
        bool Update(MenuModel sua);
        bool Delete(int ma);

    }
}