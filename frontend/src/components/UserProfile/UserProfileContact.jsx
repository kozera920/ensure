import React from 'react'

const UserProfileContact = () => {
  return (
    <div className="tab-content mt-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="space-y-6">
            
                <div className="grid grid-cols-3 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-500 mb-1">MID</label>
                        <div className="text-sm p-2 bg-gray-50 rounded">MID</div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-500 mb-1">Phone Number</label>
                        <div className="text-sm p-2 bg-gray-50 rounded">Phone Number</div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-500 mb-1">Email</label>
                        <div className="text-sm p-2 bg-gray-50 rounded">Email</div>
                    </div>
                </div>
                

                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-500 mb-1">Manzi</label>
                        <div className="text-sm p-2 bg-gray-50 rounded">Manzi</div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-500 mb-1">Denning</label>
                        <div className="text-sm p-2 bg-gray-50 rounded">Denning</div>
                    </div>
                </div>
                
    
                <div className="grid grid-cols-3 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-500 mb-1">City</label>
                        <div className="text-sm p-2 bg-gray-50 rounded">Mugambazi</div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-500 mb-1">2008-01-24</label>
                        <div className="text-sm p-2 bg-gray-50 rounded">2008-01-24</div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-500 mb-1">Address</label>
                        <div className="text-sm p-2 bg-gray-50 rounded">KK394ST</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserProfileContact