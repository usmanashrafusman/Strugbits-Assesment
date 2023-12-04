import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers } from "@/store/actions/customers";
import { setEntites, addItem, updateItem, deleteItem } from "@/store/reducers/customerSlice";
const useCustomer = () => {

    const dispatch = useDispatch();
    const { entities, status } = useSelector((state) => state.customers);

    const [selectedItem, setSelectedItem] = useState(null);
    const [isModelOpen, setIsModelOpen] = useState(false)
    const [action, setAction] = useState(null)

    const fetchCustomersList = () => {
        dispatch(fetchCustomers({ page: "1" }))
    };

    const showModel = useCallback((item, action) => {
        setSelectedItem(item)
        setIsModelOpen(true)
        setAction(action)
    }, [])

    const handleClose = () => {
        setSelectedItem(null)
        setIsModelOpen(false)
        setAction(null)
    }

    const handleEdit = (item) => {
        dispatch(updateItem({ id: selectedItem.id, ...item }))
        handleClose()
    };

    const handleAdd = (item) => {
        dispatch(addItem(item))
        handleClose()
    };

    const handleDelete = () => {
        dispatch(deleteItem(selectedItem?.id))
        handleClose()
    };

    const onSubmit = (item) => {
        if (action === "EDIT") {
            handleEdit(item)
        } else {
            handleAdd(item)
        }
    }

    //fetch customers list
    useEffect(() => {
        fetchCustomersList()
    }, []);

    return {
        status,
        action,
        entities,
        setAction,
        isModelOpen,
        selectedItem,
        setIsModelOpen,
        showModel,
        handleClose,
        handleEdit,
        handleAdd,
        onSubmit,
        handleDelete,
        setSelectedItem
    }
};

export default useCustomer;