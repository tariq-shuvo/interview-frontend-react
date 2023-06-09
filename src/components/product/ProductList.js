import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import ProductDetails from './ProductDetails';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types'
import { deleteBatchProductInfo, deleteProductInfo, fetchAllProductInfo, fetchSingleProductInfo } from '../../util/productOperation';

const ProductList = (props) => {
  const auth = useSelector((state) => state.auth)
  const products = useSelector((state) => state.products.products)
  const productInfo = useSelector((state) => state.products)
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  const [brachProductID, setBrachProductID] = useState([])
  const {productUpdate, setProductUpdateInfo} = props;

  useEffect(()=>{
    dispatch(fetchAllProductInfo())
  }, [dispatch])

  const handleClose = () => setShow(false);

  const handleShow = (productID) => {
    dispatch(fetchSingleProductInfo(productID))
    setShow(true)
  };

  const deleteSingleProduct = async (productID) => {
    dispatch(deleteProductInfo(productID));
  };

  const setMarkup = async(e, markInfo) => {
    let branchProductList;
    if(markInfo.isAll){
      branchProductList = [];
      if(e.target.checked){
        let promiseArray = products.map(productInfo=>branchProductList.push({_id: productInfo._id}));
        await Promise.all(promiseArray)
      }
      setBrachProductID(branchProductList)
    }else{
      if(!e.target.checked){
        let updatedList = brachProductID.filter(productInfo=>productInfo._id !== markInfo.productID)
        setBrachProductID(updatedList)
      }else{
        setBrachProductID([...brachProductID, {_id: markInfo.productID}])
      }
    }
  }

  const deleteBatchProduct = async () => {
    if(brachProductID.length>0){
      dispatch(deleteBatchProductInfo(brachProductID));
      setBrachProductID([]);
    }
  };


  return (
    <>
      <Container>
        {auth.isLoggedIn && (
            <Row className='justify-content-center'>
              <Col className='text-right'>
                <Button variant="primary" type="button" className='mr-3 mt-4' onClick={()=>setProductUpdateInfo({...productUpdate, isVisible: true, isUpdate: false, productData: null})}>
                  Add Product
                </Button>
                <Button variant="danger" type="button" className='mt-4' onClick={deleteBatchProduct} disabled={auth.loading || brachProductID.length === 0}>
                  Batch Delete
                </Button>
              </Col>
            </Row>
        )}
        <Row>
          <Col className='mt-4'>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th className='text-center'>
                    <input type='checkbox' onChange={(e)=>setMarkup(e, {isAll: true, productID: null})} checked={productInfo.products.length > 0 && brachProductID.length === productInfo.products.length}/>
                  </th>
                  <th className='text-center'>#</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {productInfo.products.length > 0 ? (
                  productInfo.products.map((productInfo, index)=>(
                    <tr key={index}>
                      <td className='text-center'>
                        <input type='checkbox' onChange={(e)=>setMarkup(e, {isAll: false, productID: productInfo._id})} checked={(brachProductID.filter(productInfoCheck=>productInfoCheck._id===productInfo._id)).length>0 ? true : false}/>
                      </td>
                      <td className='text-center'>{index+1}</td>
                      <td>{productInfo.title}</td>
                      <td>{productInfo.price}</td>
                      <td>{productInfo.status === true ? 'active':'inactive'}</td>
                      <td>
                        <Button variant="primary" size='sm' className='mr-2' onClick={()=>handleShow(productInfo._id)} disabled={auth.loading}>view</Button>
                        {auth.isLoggedIn && (
                          <>
                            <Button variant="success" size='sm' className='mr-2' onClick={()=>setProductUpdateInfo({productData: productInfo , isVisible: true, isUpdate: true})}>edit</Button>
                            <Button variant="danger" size='sm' onClick={()=>deleteSingleProduct(productInfo._id)} disabled={auth.loading}>delete</Button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className='text-center' colSpan={6}>No data found.</td>
                  </tr>
                )}
                
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <ProductDetails show={show} handleClose={handleClose}/>
    </>
  )
}

ProductList.propTypes = {
  productUpdate: PropTypes.object.isRequired,
  setProductUpdateInfo: PropTypes.func.isRequired
}

export default ProductList